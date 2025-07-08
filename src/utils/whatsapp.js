export const handleWhatsapp = ({ email, phone, message }) => {
  const phoneNumber = "+971568145866";
  const messageContent = `EMAIL : ${email}\n PHONE : ${phone}\n MESSAGE : ${message}\n I would like to Know about the personalised offers for me`;
  const encodedMessage = encodeURIComponent(messageContent);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};
