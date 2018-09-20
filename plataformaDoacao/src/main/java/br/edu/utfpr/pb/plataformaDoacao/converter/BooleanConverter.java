package br.edu.utfpr.pb.plataformaDoacao.converter;

import javax.persistence.AttributeConverter;
import javax.persistence.Convert;

@Convert
public class BooleanConverter implements AttributeConverter<Boolean, String> {

    @Override
    public String convertToDatabaseColumn(Boolean value) {
    	return (Boolean.TRUE.equals(value) ? "1" : "0");
    }

    @Override
    public Boolean convertToEntityAttribute(String value) {
        return "1".equals(value);
    }

}