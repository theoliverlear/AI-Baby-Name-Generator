package org.theoliverlear.entity.gender;
//=================================-Imports-==================================
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Gender {
    //============================-Variables-=================================
    private String genderTitle;
    private String genderAbbreviation;
    //============================-Constants-=================================
    public static final Gender BOY = new Gender("Boy", "B");
    public static final Gender GIRL = new Gender("Girl", "G");
    public static final Gender UNISEX = new Gender("Unisex", "UNI");
    public static final Gender ANY = new Gender("Any", "A");
    public static final Gender NONBINARY = new Gender("Nonbinary", "NB");
    //===========================-Constructors-===============================
    public Gender(String genderTitle) {
        this.genderTitle = genderTitle;
//        this.genderAbbreviation = genderTitle.substring(0, 1).toUpperCase();
        this.genderAbbreviation = "A";
    }
    public Gender(String genderTitle, String genderAbbreviation) {
        this.genderTitle = genderTitle;
        this.genderAbbreviation = genderAbbreviation;
    }
    //============================-Overrides-=================================

    //------------------------------To-String---------------------------------
    @Override
    public String toString() {
        return this.genderTitle;
    }
    //------------------------------Equals------------------------------------
    @Override
    public boolean equals(Object object) {
        if (object == this) {
            return true;
        }
        if (object instanceof Gender comparedGender) {
            return this.genderTitle.equals(comparedGender.genderTitle);
        }
        return false;
    }
}
