import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';
const resources = {
  ar: {
    translation: {
      Search: 'بحث',
      Login: 'تسجيل الدخول',
      Name: 'الأسم',
      'First Name': 'الأسم الاول',
      'Last Name': 'أسم العائلة',
      Email: 'البريد الألكتروني',
      'Mobile Number': 'رقم الهاتف',
      Password: 'كلمة السر',
      'Confirm Password': 'تأكيد كلمة السر',
      'Enter Empty Fields': 'املأ البيانات',
      'Invalid Field': 'غير صحيح',
      'Invalid Mobile Number': 'رقم الهاتف غير صحيح',
      'Invalid Email': 'البريد الألكتروني غير صحيح',
      'Invalid Password': 'كلمة السر غير صحيحة',
      'Password minimum length is 8 characters': 'الحد الادنى ٨ حروف',

      'Sign In': 'دخول',
      SignOut: 'خروج',
      'Sign up': 'انشاء حساب',
      Send: 'أرسال',
      'Verify Code': 'رقم التعريف',
      'Registered Successfully': 'تم تسجيل الحساب بنجاح',
      'Forgot Password?': 'نسيت كلمة السر؟',
      'Reset Password': 'اعاده تعيين كلمة السر',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: I18nManager.isRTL ? 'ar' : 'en',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
