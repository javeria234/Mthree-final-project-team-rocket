package com.mthree.final_project.model;


import jakarta.persistence.*;


@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userID")
    private Integer userID;

    @Column(name = "roleName", nullable = false)
    private String roleName;

    @Column(name = "fName", nullable = false)
    private String fName;

    @Column(name = "lName", nullable = false)
    private String lName;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "address")
    private String address;

    public User() {}

    public User(Integer userID, String roleName, String fName, String lName, String email, String password, String address){
        this.userID = userID;
        this.roleName = roleName;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.password = password;
        this.address = address;
    }

    public Integer getUserID() {return userID;}

    public void setUserID(Integer userID){this.userID = userID;}

    public String getRoleName() {return roleName;}

    public void setRoleName(String roleName){this.roleName = roleName;}

    public String getFName(){return fName;}

    public void setFName(String fName){this.fName = fName;}

    public String getLName(){return lName;}

    public void setLName(String lName){this.lName = lName;}

    public String getEmail(){return email;}

    public void setEmail(String email){this.email = email;}

    public String getPassword(){return password;}

    public void setPassword(String password){this.password = password;}

    public String getAddress(){return address;}

    public void setAddress(String address){this.address = address;}






}
