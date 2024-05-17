package org.theoliverlear.service;
//=================================-Imports-==================================
import org.springframework.stereotype.Service;
import org.theoliverlear.communication.request.NameRequest;
import org.theoliverlear.entity.gender.Gender;
import org.theoliverlear.entity.name.Names;
import org.theoliverlear.entity.nationality.Nationality;
import org.theoliverlear.model.generator.NameGenerator;
import org.theoliverlear.model.name.NameListSeperator;
import org.theoliverlear.model.name.NamesParameters;

@Service
public class GeneratorService {
    //============================-Variables-=================================
    private NameGenerator nameGenerator;
    //===========================-Constructors-===============================
    public GeneratorService() {
        this.nameGenerator = new NameGenerator();
    }
    public GeneratorService(NameGenerator nameGenerator) {
        this.nameGenerator = nameGenerator;
    }
    //=============================-Methods-==================================

    //---------------------------Generate-Names-------------------------------
    public Names generateNames(NameRequest nameRequest) {
        Gender gender = new Gender(nameRequest.getGender());
        Nationality nationality = new Nationality(nameRequest.getNationality());
        Names similarNames = seperateNames(nameRequest.getSimilarNames());
        Names dissimilarNames = seperateNames(nameRequest.getDissimilarNames());
        String lastName = nameRequest.getLastName();
        boolean includeLastName = nameRequest.isIncludeLastName();
        int numNames = nameRequest.getNumNames();
        int nameComplexity = nameRequest.getNameComplexity();
        int nameUniqueness = nameRequest.getNameUniqueness();
        NamesParameters namesParameters = new NamesParameters(gender,
                                                              nationality,
                                                              similarNames,
                                                              dissimilarNames,
                                                              lastName,
                                                              includeLastName,
                                                              numNames,
                                                              nameComplexity,
                                                              nameUniqueness);
        this.nameGenerator.setNamesParameters(namesParameters);
        return this.nameGenerator.generateAndGetNames();
    }
    //---------------------------Seperate-Names-------------------------------
    public Names seperateNames(String namesString) {
        return NameListSeperator.seperateNames(namesString);
    }
}
