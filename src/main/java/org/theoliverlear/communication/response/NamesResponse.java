package org.theoliverlear.communication.response;
//=================================-Imports-==================================
import lombok.Data;
import org.theoliverlear.entity.name.Names;

@Data
public class NamesResponse {
    //============================-Variables-=================================
    private Names names;
    //===========================-Constructors-===============================
    public NamesResponse(Names names) {
        this.names = names;
    }
}
