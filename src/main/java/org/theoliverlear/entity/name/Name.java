package org.theoliverlear.entity.name;
//=================================-Imports-==================================
import lombok.Getter;
import lombok.Setter;
import org.theoliverlear.entity.rating.Rating;

@Getter
@Setter
public class Name {
    //============================-Variables-=================================
    private String name;
    private Rating rating;
    //===========================-Constructors-===============================
    public Name() {
        this.name = "";
        this.rating = Rating.NO_RATING;
    }
    public Name(String name) {
        this.name = name;
        this.rating = Rating.NO_RATING;
    }
    public Name(String name, Rating rating) {
        this.name = name;
        this.rating = rating;
    }
    //============================-Overrides-=================================

    //------------------------------To-String---------------------------------
    @Override
    public String toString() {
        return this.name;
    }
}
