require_relative '../node_modules/react-native/scripts/react_native_pods'
require_relative '../node_modules/@react-native-community/cli-platform-ios/native_modules'

platform :ios, '10.0'

target 'UberClone' do

   # React Native Maps dependencies
    rn_maps_path = '../node_modules/react-native-maps'
    pod 'react-native-google-maps', :path => rn_maps_path
    pod 'GoogleMaps'
    pod 'Google-Maps-iOS-Utils'

  config = use_native_modules!

  use_react_native!(:path => config["reactNativePath"])

  target 'UberCloneTests' do
    inherit! :complete
    # Pods for testing
  end

  # Enables Flipper.
  #
  # Note that if you have use_frameworks! enabled, Flipper will not work and
  # you should disable these next few lines.
  use_flipper!
  post_install do |installer|
    flipper_post_install(installer)
  end
end

target 'UberClone-tvOS' do
  # Pods for UberClone-tvOS

  target 'UberClone-tvOSTests' do
    inherit! :search_paths
    # Pods for testing
  end
end
