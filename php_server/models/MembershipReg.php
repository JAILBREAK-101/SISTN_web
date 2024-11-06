<?

require_once 'database.php';

class MembershipReg {
    private $conn;
    private $table = 'membership_reg';

    // Model properties
    public $surname;
    public $firstName;
    public $otherName;
    public $streetAddress;
    public $state;
    public $telephone;
    public $email1;
    public $email2;
    public $passport;
    public $institution;
    public $otherInstitution;
    public $occupation;
    public $workOrganization;
    public $rank;
    public $qualifications;
    public $graduationYear;
    public $paymentType;
    public $membershipCategory;
    public $paymentStatus = 'Pending';
 
    // Constructor with database connection
    public function __construct($db) {
        $this->conn = $db;
    }

    // Create a new membership record
    public function create() {
        $query = "INSERT INTO " . $this->table . " 
            INSERT INTO Membership_reg (
            membershipCategory, 
            surname, 
            firstName, 
            otherName, 
            streetAddress, 
            state, 
            telephone, 
            email1, 
            email2, 
            passport, 
            occupation, 
            institution, 
            otherInstitution, 
            workOrganization, 
            rank, 
            qualifications, 
            graduationYear, 
            paymentType, 
            paymentStatus
        ) VALUES (
            :membershipCategory, 
            :surname, 
            :firstName, 
            :otherName, 
            :streetAddress, 
            :state, 
            :telephone, 
            :email1, 
            :email2, 
            :passport, 
            :occupation, 
            :institution, 
            :otherInstitution, 
            :workOrganization, 
            :rank, 
            :qualifications, 
            :graduationYear, 
            :paymentType, 
            :paymentStatus
        )";
        // Prepare the query
        $stmt = $this->conn->prepare($query);

        // Bind values
        $stmt->bindParam(':membershipCategory', $this->membershipCategory);
        $stmt->bindParam(':surname', $this->surname);
        $stmt->bindParam(':firstName', $this->firstName);
        $stmt->bindParam(':otherName', $this->otherName);
        $stmt->bindParam(':streetAddress', $this->streetAddress);
        $stmt->bindParam(':state', $this->state);
        $stmt->bindParam(':telephone', $this->telephone);
        $stmt->bindParam(':email1', $this->email1);
        $stmt->bindParam(':email2', $this->email2);
        $stmt->bindParam(':passport', $this->passport);
        $stmt->bindParam(':institution', $this->institution);
        $stmt->bindParam(':otherInstitution', $this->otherInstitution);
        $stmt->bindParam(':occupation', $this->occupation);
        $stmt->bindParam(':workOrganization', $this->workOrganization);
        $stmt->bindParam(':rank', $this->rank);
        $stmt->bindParam(':qualifications', $this->qualifications);
        $stmt->bindParam(':graduationYear', $this->graduationYear);
        $stmt->bindParam(':paymentType', $this->paymentType);
        $stmt->bindParam(':paymentStatus', $this->paymentStatus);

        // Execute the query
        if ($stmt->execute()) {
            return true;
        }

        return false;
    }
}