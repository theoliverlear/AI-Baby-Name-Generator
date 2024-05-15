package org.theoliverlear;

public enum Gender {
    BOY("Boy", 'B'),
    GIRL("Girl", 'G'),
    UNISEX("Unisex", 'U'),
    ANY("Any", 'A'),
    NONBINARY("Nonbinary", 'N');
    public final String GENDER;
    public final char GENDER_SHORT;
    Gender(String GENDER, char GENDER_SHORT) {
        this.GENDER = GENDER;
        this.GENDER_SHORT = GENDER_SHORT;
    }
}
