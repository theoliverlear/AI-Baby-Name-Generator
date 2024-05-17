package org.theoliverlear.entity.nationality;
//=================================-Imports-==================================
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Nationality {
    //============================-Variables-=================================
    private String nationality;
    //============================-Constants-=================================
    public static final Nationality ANY = new Nationality("Any");
    //===========================-Constructors-===============================
    public Nationality() {
        this.nationality = "Any";
    }
    public Nationality(String nationality) {
        this.nationality = nationality;
    }
    //============================-Overrides-=================================

    //------------------------------To-String---------------------------------
    @Override
    public String toString() {
        return this.nationality;
    }
}
