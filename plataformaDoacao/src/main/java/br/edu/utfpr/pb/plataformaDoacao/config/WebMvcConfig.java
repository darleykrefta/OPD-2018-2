package br.edu.utfpr.pb.plataformaDoacao.config;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.FormHttpMessageConverter;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.fasterxml.jackson.core.Version;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

	@Autowired
	private ObjectMapper objectMapper;
	@Autowired
	private LocalDateSerializer localDateSerializer;
	@Autowired
	private LocalDateDeserializer localDateDeserializer;

	private MappingJackson2HttpMessageConverter customJackson2HttpMessageConverter() {
		SimpleModule module = new SimpleModule("app", Version.unknownVersion());
		module.addSerializer(LocalDate.class, localDateSerializer);
		module.addDeserializer(LocalDate.class, localDateDeserializer);
		objectMapper.registerModule(module);

		MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
		converter.setObjectMapper(objectMapper);
		return converter;
	}

	@Override
	public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
		converters.add(new StringHttpMessageConverter());
		converters.add(customJackson2HttpMessageConverter());
		converters.add(new FormHttpMessageConverter());
	}

}
