import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Comments({ navigation, route }) {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = () => {
    // Handle comment submission logic
    console.log('Comment:', comment);
    // Close the modal and navigate back to the previous screen
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        {/* Add a back button */}
        <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Comments</Text>
      </View>

      <View style={styles.commentContainer}>
        <View style={styles.commentInputContainer}>
          <TextInput
            multiline
            placeholder="Write a comment..."
            style={styles.commentInput}
            value={comment}
            onChangeText={setComment}
          />
          <TouchableOpacity style={styles.commentButton} onPress={handleCommentSubmit}>
            <Text style={styles.commentButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = {
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  commentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 10,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  commentButton: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 20,
  },
  commentButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
};
