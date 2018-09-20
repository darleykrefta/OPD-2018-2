package br.edu.utfpr.pb.plataformaDoacao.config;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.springframework.context.annotation.Configuration;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

@Configuration
public class LocalDateSerializer extends JsonSerializer<LocalDate> {
	private static final DateTimeFormatter DEFAULT_FORMATTER = 
			 DateTimeFormatter.ofPattern("dd/MM/yyyy");
    @Override
    public void serialize(LocalDate date, JsonGenerator jsonGenerator, 
    		SerializerProvider serializerProvider) throws IOException {
    	 String str = (DEFAULT_FORMATTER == null) ? date.toString() : date.format(DEFAULT_FORMATTER);
        jsonGenerator.writeString(str);
    }
}
