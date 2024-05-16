package org.theoliverlear.entity.gender;

public class Gender {
    String genderTitle;
    String genderAbbreviation;
    public static final Gender BOY = new Gender("Boy", "B");
    public static final Gender GIRL = new Gender("Girl", "G");
    public static final Gender UNISEX = new Gender("Unisex", "UNI");
    public static final Gender ANY = new Gender("Any", "A");
    public static final Gender NONBINARY = new Gender("Nonbinary", "NB");
    public Gender(String genderTitle, String genderAbbreviation) {
        this.genderTitle = genderTitle;
        this.genderAbbreviation = genderAbbreviation;
    }
}
