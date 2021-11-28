import admin from 'firebase-admin';

if (!admin.apps.length) {
  // @ts-ignore
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail:
        'firebase-adminsdk-2cqsm@glowandgrow-e5a60.iam.gserviceaccount.com',
      privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCz65gPeYzDgCUn\nlja7fHA2uT/R3OvACfNn4oDdYGHe0qU1xLx51aYGZPfhPFP6yDDwJTF3PdbvDdF8\nFksoZ8L+H+lsYSD3bVkJXZn+/BVhRc6agNBOfidBFZv1bQOLN6DttkL8cSgMHcAn\n+yNnw5p6yQLwnaNNmkp+GS10CrNJNh/oIMrRMkjZpvfRv3t0Z5vcfTutYyptakGD\nqVQQKvUzvycStub335UlpcDYtDoh6UQWIijPXmIligMvjb4FMh4jXiIzqUsXFYI4\nMDan2JuR3Cz6SjuK9vxqMl5LTxqINl76HfkrPACm4mYJ3oggQyIi3q/Nmqse1bR7\nm220kxGvAgMBAAECggEATuO+iQqC7jYCFJmI5ixqB5SypxJ3TH0QfTyTxH2+bDVw\nu2LIQaOsaKFdDyWkrRGaY7HrPp2e4LLuZ7peuhjFJyhW8W6lRdhsce7Y1zUxKrWx\nIY3ZyJEIJUGUYMisBR8fMRv5wzbamHVzDBTSMW1TDwOUhmyYbi54+1GO3JLUigSz\nuMKvl4uktFQKWJMKzb7tWZv3BaDDs2yIaRiu2gcljEUGTHSSTAVGffbgyMqL5mbz\nL6tIvqxSMqFxiFKg7pttpz7wv4bKOxt5Kuf2hs9imuAv5U2y4OBlrOVuEgrtwOYu\nLLV0uLOkItUNyuFjgAoKbJ3kb7uMwEvi4o1NqiLIAQKBgQDz6X88wn0gYGguAhn5\nEEET6TW86ZFNfCWN79+psgApFnac8ZcsLYhsPKxvxHJbcIbry7bQO6tlGBtMnqDO\nAFO8Zn85J7OcrAQAgQGmM79KqsEVZSbmcwJasNcOa3BIwaLgzRZNT0VqG9jph8rm\nKqAtJPMEXpKsHyL3Po77kDkzcQKBgQC81jxHH9rSYV0EtbpKOU1YaKX+LjoeVJ2u\n0se93xyMFX34A4WDeuD4/PPpUE7MlP5W8un8+my1gdq4eYMXWUi/yig/J2cOMAGl\nlBtzh254b+saYmpi7ruOylzIQNv4cOALaAI9+mRfCaweJdx8CAvFwI4DHci9d8gX\nesQtOrnHHwKBgCn4WsGMwdUpYaPRDsERr/EKJwoLssn/e8LRrM3ZaDeput1EoPuk\nFh5xzkYpKnhbg4vdcOah7dsma8QiY48u9Tms9WVTVI+39bRUfoEn1Fm3yiOxVSFA\nVv5eAZNkn1yVnT5La/P/mPUqN4fvqtUyLn+2JO7yixB9Bxo+NIJLDdyxAoGAAV2j\nTfhjAsaFf7U4xbSoZI1NNgtrjDCce1k27J6ifDjjklmkK5FF80cRFIzqJPym4kYb\nfyLoil+ID3GBizewGQMDS4GjcyzRtjrd//XozKIylxxDHLgRTzUTerdNX/yhAjQc\nYAphk3Zkcktfzt3YB/QektMyUnx9S/4tUQ5trY0CgYEA6i3XJB5DylEH4wXs6QeF\nNqn0K+hfBd8i5pm3Oq4e23Tl8Ee/2GsYxjwKyHn9bqboz3dp7xZF+6rYdcqzmGRn\n4kidHXxbjUFeYIIgOV4/ZhDOJZV+njxmdo35ZoqZoZv0BoX1GOVmnLa4EQJfK+yU\nw0roed+MULpAVlf6HNj1NZ8=\n-----END PRIVATE KEY-----\n'.replace(
        /\\n/g,
        '\n'
      ),
      projectId: 'glowandgrow-e5a60'
    }),
    databaseURL: 'https://glowandgrow-e5a60.firebaseio.com'
  });
}

const db = admin.firestore();
const auth = admin.auth();

export { db, auth };
