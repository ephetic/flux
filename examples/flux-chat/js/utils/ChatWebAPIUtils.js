/**
 * This file is provided by Facebook for testing and evaluation purposes
 * only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var firebaseUtil = require('./firebaseUtil');

var ChatServerActionCreators = require('../actions/ChatServerActionCreators');

firebaseUtil.registerPath('messages',ChatServerActionCreators.receiveAll);

module.exports = {

  getAllMessages: function() {
    console.log('getAllMessages');
    // simulate retrieving data from a database
    // var rawMessages = JSON.parse(localStorage.getItem('messages'));

    // simulate success callback
    // ChatServerActionCreators.receiveAll(rawMessages);

    // Don't get messages on demand from firebase - ie Hollywood.
    // ChatServerActionCreators.receiveAll([]);
  },

  createMessage: function(message, threadName) {
    // simulate writing to a database
    // var rawMessages = JSON.parse(localStorage.getItem('messages'));
    var timestamp = Date.now();
    var id = 'm_' + timestamp;
    var threadID = message.threadID || ('t_' + Date.now());
    var createdMessage = {
      id: id,
      threadID: threadID,
      threadName: threadName,
      authorName: message.authorName,
      text: message.text,
      timestamp: timestamp
    };
    // rawMessages.push(createdMessage);
    // localStorage.setItem('messages', JSON.stringify(rawMessages));
    firebaseUtil.push('messages', createdMessage);

    // simulate success callback
    // setTimeout(function() {
    //   ChatServerActionCreators.receiveCreatedMessage(createdMessage);
    // }, 0);
  }

};
