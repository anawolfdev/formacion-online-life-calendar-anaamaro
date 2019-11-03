import LocalStorage from 'local-storage';

class getData {
 getSavedData() {
  const savedDays = LocalStorage.get('days');
  return savedDays
 }
 saveUserData(info) {
  LocalStorage.set('days', info);
 }
}

export default getData;