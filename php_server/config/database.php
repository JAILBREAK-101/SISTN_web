<?php

class DatabaseConfig {

    private $host;
    private $db_name;
    private $username;
    private $password;
    private $port;
    public $conn;

    public function __construct() {
        $this->loadConfig();
    }

    private function loadConfig(): void {
        $this->host = 'localhost';
        $this->port = getenv('DB_PORT');
        $this->db_name = getenv('SQL_DB_NAME');
        $this->username = getenv('SQL_DB_USER');
        $this->password = getenv('SQL_DB_PASSWORD');

        if (empty($this->host) || empty($this->db_name) || empty($this->username) || empty($this->password)  || empty($this->port)) {
            throw new Exception('Missing database environment variables.');
        }
    }

    public function getConnection(): PDO {
        if (!$this->conn) {
            try {
                $this->conn = new PDO(
                    "mysql:host={$this->host};port={$this->port};dbname={$this->db_name}",
                    $this->username,
                    $this->password
                );
                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $exception) {
                throw new Exception("Connection error: " . $exception->getMessage());
            }
        }

        return $this->conn;
        echo $this->conn;
    }
}