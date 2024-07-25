import axios from 'axios';
import env from '../database/token.json';

    
export default class dbClient {

  async getPosts() {
    try {
      const response = await axios.get('http://localhost:8000/posts');
      const  data  =  response.data.result;



      const posts = data.map((post) => ({
        id: post.id,
        geolocation: post.geolocation,
        multimediaurl: post.multimediaurl,
        textcontent: post.textcontent,
        timestamp: post.timestamp,
        lastupdatetimestamp: post.lastupdatetimestamp,
        userid: post.userid,
        username: post.username,
        profilephoto: post.profilephoto,
        language: post.language,
        classifier: post.classifier,
        isclassified: post.isclassified,
        class: post.class,
        translator: post.translator,
        istranslated: post.istranslated,
        translatedtextcontent: post.translatedtextcontent,
      }));
      return { message: 'Post Fetch Successful', result: posts };
    } catch (e) {
      console.error('Failed fetching all posts:', e);
      return { message: 'Failed fetching all posts', result: null };
    }
  }

  async getRequestPosts() {
    try {
      const response = await axios.get('http://localhost:8000/requests');
      const  data  =  response.data.result;

      const requests = data.map((request) => ({
        id: request.id,
        umbrellatype: request.umbrellatype,
        item: request.item,
        quantity: request.quantity,
        // postid: request.postid,
        geolocation: request.geolocation,
        translatedtextcontent: request.translatedtextcontent,
        // timestamp: request.timestamp,
        postclass: request.postclass,
        userid: request.userid,
        // username: request.username,
        // profilephoto: request.profilephoto,
        // matcherid: request.matcherid,
        ismatched: request.ismatched,
      }));
      return { message: 'Request Posts Fetch Successful', result: requests };
    } catch (e) {
      console.error('Failed fetching all request posts:', e);
      return { message: 'Failed fetching all request posts', result: null };
    }
  }


  async getRequestEvacuationPosts() {
    try {
      const response = await axios.get('http://localhost:8000/evacuationrequests');
      const  data  =  response.data.result;

      const requests = data.map((request) => ({
        id: request.id,
        umbrellatype: request.umbrellatype,
        item: request.item,
        quantity: request.quantity,
        postid: request.postid,
        geolocation: request.geolocation,
        translatedtextcontent: request.translatedtextcontent,
        timestamp: request.timestamp,
        // postclass: request.postclass,
        userid: request.userid,
        username: request.username,
        // profilephoto: request.profilephoto,
        matcherid: request.matcherid,
        ismatched: request.ismatched,
      }));
      return { message: 'Request Evacuate Posts Fetch Successful', result: requests };
    } catch (e) {
      console.error('Failed fetching all request evacuate posts:', e);
      return { message: 'Failed fetching all request evacuate posts', result: null };
    }
  }


  async getRequestSearchPosts() {
    try {
      const response = await axios.get('http://localhost:8000/searchrequests');
      const  data  =  response.data.result;

      const requests = data.map((request) => ({
        id: request.id,
        umbrellatype: request.umbrellatype,
        item: request.item,
        quantity: request.quantity,
        postid: request.postid,
        geolocation: request.geolocation,
        translatedtextcontent: request.translatedtextcontent,
        timestamp: request.timestamp,
        // postclass: request.postclass,
        userid: request.userid,
        username: request.username,
        // profilephoto: request.profilephoto,
        matcherid: request.matcherid,
        ismatched: request.ismatched,
      }));
      return { message: 'Request Search Posts Fetch Successful', result: requests };
    } catch (e) {
      console.error('Failed fetching all request search posts:', e);
      return { message: 'Failed fetching all request search posts', result: null };
    }
  }
//   async getDonationPosts() {
//     try {
//       const response = await axios.get(`${this.baseUrl}/donations/rows`, { headers: this.headers });
//       const data = response.data.data;
//       const donations = data.map((donation) => ({
//         id: donation.id,
//         umbrellatype: donation.umbrellatype,
//         item: donation.item,
//         quantity: donation.quantity,
//         postid: donation.postid,
//         geolocation: donation.geolocation,
//         translatedtextcontent: donation.translatedtextcontent,
//         timestamp: donation.timestamp,
//         postclass: donation.postclass,
//         userid: donation.userid,
//         username: donation.username,
//         profilephoto: donation.profilephoto,
//         matcherid: donation.matcherid,
//         ismatched: donation.ismatched,
//       }));
//       return { message: 'Donation Posts Fetch Successful', result: donations };
//     } catch (e) {
//       console.error('Failed fetching all donation posts:', e);
//       return { message: 'Failed fetching all donation posts', result: null };
//     }
//   }

//   async getInformationPosts() {
//     try {
//       const response = await axios.get(`${this.baseUrl}/information/rows`, { headers: this.headers });
//       const data = response.data.data;
//       const information = data.map((info) => ({
//         postid: info.postid,
//         userid: info.userid,
//         textualinfo: info.textualinfo,
//         multimediaurl: info.multimediaurl,
//         geolocation: info.geolocation,
//       }));
//       return { message: 'Information Posts Fetch Successful', result: information };
//     } catch (e) {
//       console.error('Failed fetching all information posts:', e);
//       return { message: 'Failed fetching all information posts', result: null };
//     }
//   }

//   async addUser(user) {
//     const newUser = {
//       userid: user.userID,
//       username: user.userName,
//       address: user.address,
//       dateofbirth: user.dateOfBirth,
//       gender: user.gender,
//       profileimage: user.profileImage,
//       maskednumber: user.maskedNumber,
//       email: user.email,
//       phone: user.phone,
//       password: user.password,
//       language: user.language,
//     };
//     try {
//       const response = await axios.post(`${this.baseUrl}/users`, newUser, { headers: this.headers });
//       if (response.status === 200 || response.status === 201) {
//         console.log('User sign up successful');
//         return { message: 'User sign up successful' };
//       } else {
//         console.error('Failed: User sign up', response.statusText);
//         return { message: 'Failed: User sign up' };
//       }
//     } catch (e) {
//       console.error('Failed: User sign up', e);
//       return { message: 'Failed: User sign up' };
//     }
//   }

//   async getUser(email, password) {
//     try {
//       const query = `SELECT * from main.users WHERE email = '${email}' ALLOW FILTERING;`;
//       const headers = {
//         'Content-Type': 'text/plain',
//         'X-Cassandra-Token': env.ASTRA_DB_APPLICATION_TOKEN,
//       };
//       const response = await axios.post(`${ASTRA_BASE_URL}/api/rest/v2/cql?keyspaceQP=${env.ASTRA_DB_KEYSPACE}`, query, { headers: headers });
//       const data = response.data.data;
//       const userData = data[0];
//       if (userData.password === password) return { message: 'Valid User', user: userData };
//       else return { message: 'Invalid Credentials. Please try again.', user: null };
//     } catch (e) {
//       console.error('User not found', e);
//       return { message: 'Invalid Credentials. Please try again.', user: null };
//     }
//   }

}