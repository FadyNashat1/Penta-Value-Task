import getCurrentUserLocation from '../Apis/map/getCurrentUserLocation';
const getCurrentLocation = async (navigation, screenName) => {
  let locationData = await getCurrentUserLocation();

  if (locationData == undefined) {
  } else if (locationData == false) {
    navigation.navigate(
      'AllowLocationScreen',
      screenName == undefined ? {} : {screenName},
    );
  }
  return locationData;
};

export default getCurrentLocation;
