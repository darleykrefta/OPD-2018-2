package br.edu.utfpr.pb.plataformaDoacao.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import br.edu.utfpr.pb.plataformaDoacao.model.Mail;
import br.edu.utfpr.pb.plataformaDoacao.model.Pessoa;

import javax.mail.internet.MimeMessage;
import java.nio.charset.StandardCharsets;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender emailSender;

   // @Autowired
   // private SpringTemplateEngine templateEngine;

    public void sendEmail(Mail mail) {
        try {
            MimeMessage message = emailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message,
                    MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
                    StandardCharsets.UTF_8.name());

            //Context context = new Context();
            //context.setVariables(mail.getModel());
           //String html = templateEngine.process("email/email-template", context);

            helper.setTo(mail.getTo());
            String textoEmail = "Caro " + ((Pessoa)mail.getModel().get("pessoa")).getNome() + " <br />";
            textoEmail += "Foi solicitada a recuperação de senha da Plataforma de Doações: ";
            textoEmail += "<a href='" + mail.getModel().get("resetUrl") + "'> Recuperar senha </a> <br />";
            textoEmail += " <br /> <br />  Caso não tenha sido você, favor desconsiderar este e-mail.";
            
            
            
            helper.setText(textoEmail, true);
            helper.setSubject(mail.getSubject());
            helper.setFrom(mail.getFrom());

            emailSender.send(message);
        } catch (Exception e){
            throw new RuntimeException(e);
        }
    }

}