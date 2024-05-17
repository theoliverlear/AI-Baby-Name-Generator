package org.theoliverlear.model.name;
//=================================-Imports-==================================
import lombok.Getter;
import lombok.Setter;
import org.theoliverlear.entity.gender.Gender;
import org.theoliverlear.entity.name.Names;
import org.theoliverlear.entity.nationality.Nationality;

@Getter
@Setter
public class NamesParameters {
    //============================-Variables-=================================
    private Gender gender;
    private Nationality nationality;
    private Names similarNames;
    private Names dissimilarNames;
    private String lastName;
    private boolean includeLastName;
    private int numNames;
    private int nameComplexity;
    private int nameUniqueness;
    private String requestPrompt;
    // TODO: Add length, syllables, and other name parameters
    //===========================-Constructors-===============================
    public NamesParameters() {
        this.gender = Gender.ANY;
        this.nationality = new Nationality();
        this.similarNames = new Names();
        this.dissimilarNames = new Names();
        this.lastName = "";
        this.includeLastName = false;
        this.numNames = 1;
        this.nameComplexity = 1;
        this.nameUniqueness = 1;
        this.requestPrompt = "";
    }
    public NamesParameters(Gender gender,
                           Nationality nationality,
                           Names similarNames,
                           Names dissimilarNames,
                           String lastName,
                           boolean includeLastName,
                           int numNames,
                           int nameComplexity,
                           int nameUniqueness) {
        this.gender = gender;
        this.nationality = nationality;
        this.similarNames = similarNames;
        this.dissimilarNames = dissimilarNames;
        this.lastName = lastName;
        this.includeLastName = includeLastName;
        this.numNames = numNames;
        this.nameComplexity = nameComplexity;
        this.nameUniqueness = nameUniqueness;
        this.fetchRequestPrompt();
    }
    //=============================-Methods-==================================

    //------------------------Fetch-Request-Prompt----------------------------
    public void fetchRequestPrompt() {
        String prompt = "You will generate a single baby name based on the following factors. " +
                        "Gender: %s - " +
                        "Nationality: %s - " +
                        "Similar Names: %s - " +
                        "Dissimilar Names: %s - " +
                        "Uniqueness: %d/10 (1 is least unique, 10 is completely unique) - " +
                        "Last Name: %s - " +
                        "Include Last Name In Response: %b - " +
                        "You will respond only with %d name(s) seperated by commas.";
        prompt = prompt.formatted(this.gender.getGenderTitle(),
                                  this.nationality,
                                  this.similarNames.toString(),
                                  this.dissimilarNames.toString(),
                                  this.nameUniqueness,
                                  this.lastName,
                                  this.includeLastName,
                                  this.numNames);
        this.requestPrompt = prompt;
    }
}
