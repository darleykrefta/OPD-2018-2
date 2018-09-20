package br.edu.utfpr.pb.plataformaDoacao.config;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.springframework.context.annotation.Configuration;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

@Configuration
public class LocalDateDeserializer extends JsonDeserializer<LocalDate> {

	 private static final DateTimeFormatter DEFAULT_FORMATTER = 
			 DateTimeFormatter.ofPattern("dd/MM/yyyy");
	 
    @Override
    public LocalDate deserialize(JsonParser jsonParser, 
    		DeserializationContext deserializationContext) 
    				throws IOException, JsonProcessingException {
        try {
            return LocalDate.parse(jsonParser.getValueAsString(), DEFAULT_FORMATTER);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }
}
