// service this file from root
importScripts("https://js.pusher.com/beams/service-worker.js");

// http://localhost:3000/service-worker.js


// Load the SDK via a script tag in your website:
<script src="https://js.pusher.com/beams/1.0/push-notifications-cdn.js"></script>


// Paste this snippet into your website to register your browser with our service and subscribe to the Device Interest hello:
{/* <script>
  const beamsClient = new PusherPushNotifications.Client({
    instanceId: '5bf08069-3403-4591-8585-aafa4e2e2ccd',
  });

  beamsClient.start()
    .then(() => beamsClient.addDeviceInterest('hello'))
    .then(() => console.log('Successfully registered and subscribed!'))
    .catch(console.error);
</script> */}