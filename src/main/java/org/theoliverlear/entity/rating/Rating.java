package org.theoliverlear.entity.rating;
//=================================-Imports-==================================

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Rating {
    //============================-Variables-=================================
    private int rating;
    //============================-Constants-=================================
    public static final Rating NO_RATING = new Rating(0);
    public static final Rating ONE_STAR = new Rating(1);
    public static final Rating TWO_STARS = new Rating(2);
    public static final Rating THREE_STARS = new Rating(3);
    public static final Rating FOUR_STARS = new Rating(4);
    public static final Rating FIVE_STARS = new Rating(5);
    //===========================-Constructors-===============================
    public Rating() {
        this.rating = 0;
    }
    public Rating(int rating) {
        this.rating = rating;
    }
    //------------------------------Equals------------------------------------
    @Override
    public boolean equals(Object object) {
        if (object == this) {
            return true;
        }
        if (object instanceof Rating comparedRating) {
            return this.rating == comparedRating.rating;
        }
        return false;
    }
    //------------------------------To-String---------------------------------
    @Override
    public String toString() {
        return this.rating + " stars";
    }
}
