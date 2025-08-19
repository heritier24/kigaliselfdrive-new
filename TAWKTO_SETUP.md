# Tawk.to Live Chat Setup Guide

## 🚀 How to Set Up Tawk.to for Your Car Rental Website

### Step 1: Create Tawk.to Account
1. Go to [https://www.tawk.to](https://www.tawk.to)
2. Click "Start Free Trial" or "Sign Up"
3. Create your account with your email
4. Verify your email address

### Step 2: Get Your Widget Code
1. Log in to your Tawk.to dashboard
2. Go to "Administration" → "Chat Widget"
3. Click on "Add a new widget"
4. Choose "Website" as the platform
5. Enter your website URL: `https://yourdomain.com`
6. Copy the Widget Code (you'll see something like this):
   ```javascript
   var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
   (function(){
   var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
   s1.async=true;
   s1.src='https://embed.tawk.to/YOUR_ID/YOUR_KEY/default';
   s1.charset='UTF-8';
   s1.setAttribute('crossorigin','*');
   s0.parentNode.insertBefore(s1,s0);
   })();
   ```

### Step 3: Update the Component
1. Open `src/components/TawkToChat.vue`
2. Replace the placeholder values:
   ```javascript
   data () {
     return {
       tawkToId: 'YOUR_ACTUAL_ID', // Replace with your ID from the widget code
       tawkToKey: 'YOUR_ACTUAL_KEY' // Replace with your key from the widget code
     }
   }
   ```

### Step 4: Customize Your Chat Widget
1. In Tawk.to dashboard, go to "Administration" → "Chat Widget"
2. Click on your widget to customize:
   - **Widget Theme**: Choose colors matching your brand
   - **Welcome Message**: Set a friendly greeting
   - **Operating Hours**: Set when you're available
   - **Languages**: Add multiple languages if needed

### Step 5: Set Up Notifications
1. Go to "Administration" → "Notifications"
2. Configure:
   - **Email notifications** when new chats start
   - **Mobile push notifications** (download the app)
   - **Sound alerts** for new messages

### Step 6: Add Team Members (Optional)
1. Go to "Administration" → "Agents"
2. Invite team members to help with customer support
3. Set their roles and permissions

## 🎨 Customization Options

### Widget Appearance
The component is already styled to match your website's design:
- **Position**: Bottom-right corner
- **Colors**: Matches your brand colors (#002F6C, #1E3A5F)
- **Size**: Responsive design for mobile and desktop
- **Animation**: Smooth hover effects

### Welcome Messages
Set up automatic messages for:
- **First-time visitors**: "Welcome to Kigali SelfDrive! How can we help you today?"
- **Car inquiries**: "Interested in renting a car? We have great options for exploring Rwanda!"
- **After hours**: "Thanks for visiting! We'll get back to you during business hours."

## 📱 Mobile App Setup
1. Download "Tawk.to" app from App Store or Google Play
2. Log in with your Tawk.to credentials
3. Enable push notifications
4. Respond to chats on the go!

## 🔧 Advanced Features

### Pre-chat Form
You can add a form before the chat starts:
```javascript
Tawk_API.preChatForm = {
  name: true,
  email: true,
  message: true
}
```

### Custom Triggers
Trigger the chat widget based on user actions:
```javascript
// Show chat after 30 seconds
setTimeout(() => {
  this.$refs.tawkChat.showChat()
}, 30000)

// Show chat when user tries to leave
document.addEventListener('mouseleave', () => {
  this.$refs.tawkChat.showChat()
})
```

### Visitor Tracking
Track visitor information:
```javascript
// Set visitor info when they book
this.$refs.tawkChat.setVisitorInfo('John Doe', 'john@example.com')
```

## 💡 Best Practices

### Response Time
- **Aim for under 1 minute** response time during business hours
- **Set clear expectations** for after-hours responses
- **Use canned responses** for common questions

### Common Questions to Prepare For
1. "What documents do I need to rent a car?"
2. "Do you have automatic transmission vehicles?"
3. "What's included in the rental price?"
4. "Can I pick up at the airport?"
5. "Do you offer insurance?"

### Operating Hours
Recommended hours for Rwanda:
- **Monday-Friday**: 8:00 AM - 6:00 PM (CAT)
- **Saturday**: 9:00 AM - 4:00 PM (CAT)
- **Sunday**: 10:00 AM - 2:00 PM (CAT)

## 🆘 Troubleshooting

### Widget Not Loading
1. Check your ID and Key are correct
2. Ensure your website URL is added in Tawk.to dashboard
3. Check browser console for errors
4. Verify internet connection

### Not Receiving Notifications
1. Check notification settings in dashboard
2. Verify email address is correct
3. Check spam folder
4. Test mobile app notifications

### Chat History Issues
1. Clear browser cache
2. Check if cookies are enabled
3. Verify widget code is properly installed

## 📞 Support
- **Tawk.to Help Center**: [https://help.tawk.to](https://help.tawk.to)
- **Email Support**: support@tawk.to
- **Live Chat**: Available on their website

## 🎯 Next Steps
1. Set up your Tawk.to account
2. Update the component with your credentials
3. Test the chat widget
4. Customize appearance and messages
5. Train your team on using the dashboard
6. Monitor chat analytics and improve responses

Your customers will now have instant access to live chat support! 🚀 