package org.theoliverlear.model.name;
//=================================-Imports-==================================
import org.theoliverlear.entity.name.Name;
import org.theoliverlear.entity.name.Names;

public class NameListSeperator {
    //=============================-Methods-==================================

    //---------------------------Separate-Names-------------------------------
    public static Names seperateNames(String namesString) {
        Names names = new Names();
        String delimiter = ",";
        String[] namesArray = namesString.split(delimiter);
        for (String name : namesArray) {
            names.addName(new Name(name.trim()));
        }
        return names;
    }
}
