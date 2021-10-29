class Demo {
    public static void main(String[] args) {
        Student s = new Student();
        s.setName("Satish");
        s.setAddress("Vapi");
        s.setRoll_No(1);
        System.out.println(s.getRoll_No());
        System.out.println(s.getName());
        System.out.println(s.getAddress());

    }
}

class Student {
    String Name, Address;
    int Roll_No;

    public void setName(String Name) {
        this.Name = Name;
    }

    public void setAddress(String Address) {
        this.Address = Address;
    }

    public void setRoll_No(int Roll_No) {
        this.Roll_No = Roll_No;
    }

    public String getName() {
        return Name;
    }

    public String getAddress() {
        return Address;
    }

    public int getRoll_No() {
        return Roll_No;
    }

}