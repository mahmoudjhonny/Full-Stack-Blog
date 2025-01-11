import { useTranslation } from "react-i18next";
import Image from "./Image";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div onClick={toggleLanguage} className="cursor-pointer">
      {i18n.language === "en" ? (
        <Image src="english.png" alt="English icon" width={32} height={32} />
      ) : (
        <Image src="arabic.png" alt="Arabic icon" width={32} height={32} />
      )}
    </div>
  );
};

export default LanguageSelector;
