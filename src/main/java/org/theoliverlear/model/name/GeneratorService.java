package org.theoliverlear.model.name;

import org.springframework.stereotype.Service;
import org.theoliverlear.entity.name.Names;

@Service
public class GeneratorService {
    public Names seperateNames(String namesString) {
        return NameListSeperator.seperateNames(namesString);
    }
}
