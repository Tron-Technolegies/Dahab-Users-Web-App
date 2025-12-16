export const handleWhatsapp = ({ email, phone, message }) => {
  const phoneNumber = "+971509669623";
  const messageContent = `EMAIL : ${email}\n PHONE : ${phone}\n MESSAGE : ${message}\n I would like to Know about the personalised offers for me`;
  const encodedMessage = encodeURIComponent(messageContent);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};

export const sendTopupRequest = ({ amount, coupon, discount }) => {
  const phoneNumber = "+971509669623";
  const messageContent = `I Would like to do a top-up for my wallet. \n Amount: ${amount} \n Coupon: ${coupon} \n Discount: ${discount.toFixed(
    2
  )}`;
  const encodedMessage = encodeURIComponent(messageContent);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};

export const sendMachineBuyingRequest = ({
  total,
  coupon,
  discount,
  miners,
}) => {
  const phoneNumber = "+971509669623";
  const messageContent = `I Would like to do a purchase. \n Total: ${total} \n Coupon: ${coupon} \n Discount: ${discount} \n Items: ${miners}`;
  const encodedMessage = encodeURIComponent(messageContent);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};
