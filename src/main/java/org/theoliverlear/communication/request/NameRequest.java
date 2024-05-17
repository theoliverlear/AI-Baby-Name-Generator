package org.theoliverlear.communication.request;
//=================================-Imports-==================================
import lombok.Data;

@Data
public class NameRequest {
    //============================-Variables-=================================
    String gender;
    String nationality;
    String similarNames;
    String dissimilarNames;
    String lastName;
    boolean includeLastName;
    int numNames;
    int nameComplexity;
    int nameUniqueness;
    //===========================-Constructors-===============================
    public NameRequest(String gender, String nationality, String similarNames,
                       String dissimilarNames, String lastName,
                       boolean includeLastName, int numNames,
                       int nameComplexity, int nameUniqueness) {
        this.gender = gender;
        this.nationality = nationality;
        this.similarNames = similarNames;
        this.dissimilarNames = dissimilarNames;
        this.lastName = lastName;
        this.includeLastName = includeLastName;
        this.numNames = numNames;
        this.nameComplexity = nameComplexity;
        this.nameUniqueness = nameUniqueness;
    }
}
