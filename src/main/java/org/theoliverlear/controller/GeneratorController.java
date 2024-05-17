package org.theoliverlear.controller;
//=================================-Imports-==================================
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.theoliverlear.communication.request.NameRequest;
import org.theoliverlear.communication.response.NamesResponse;
import org.theoliverlear.entity.name.Names;
import org.theoliverlear.service.GeneratorService;

@Controller
@RequestMapping("/generator")
public class GeneratorController {
    //============================-Variables-=================================
    private GeneratorService generatorService;
    //===========================-Constructors-===============================
    @Autowired
    public GeneratorController(GeneratorService generatorService) {
        this.generatorService = generatorService;
    }
    //=============================-Methods-==================================

    //-----------------------------Generator----------------------------------
    @RequestMapping("/")
    public String generator() {
        return "generator";
    }
    //------------------------------Generate----------------------------------
    @RequestMapping("/generate")
    public ResponseEntity<NamesResponse> generateNames(@RequestBody NameRequest nameRequest) {
        Names generatedNames = this.generatorService.generateNames(nameRequest);
        return ResponseEntity.ok(new NamesResponse(generatedNames));
    }
}
