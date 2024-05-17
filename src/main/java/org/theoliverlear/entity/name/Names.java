package org.theoliverlear.entity.name;
//=================================-Imports-==================================
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class Names {
    //============================-Variables-=================================
    private List<Name> names;
    //===========================-Constructors-===============================
    public Names() {
        this.names = new ArrayList<>();
    }
    public Names(List<Name> names) {
        this.names = names;
    }
    //=============================-Methods-==================================

    //------------------------------Add-Name----------------------------------
    public void addName(Name name) {
        this.names.add(name);
    }
    //============================-Overrides-=================================

    //------------------------------To-String---------------------------------
    @Override
    public String toString() {
        return this.names.toString();
    }
}
