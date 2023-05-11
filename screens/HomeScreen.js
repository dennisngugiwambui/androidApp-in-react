import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Comments from './Comments';

export default function HomeScreen({ navigation }) {
  const [liked, setLiked] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleShare = () => {
    // Add share functionality
  };

  const handleComment = () => {
    setShowCommentModal(true);
  };

  const closeModal = () => {
    setShowCommentModal(false);
  };

  const data = [
    {
      id: '1',
      imageSource: require('../assets/mobile-app(1).png'),
      description: 'New mobile app for budget tracking! This app is perfect for people who want to keep track of their expenses and savings. Contact us at budgetapp@gmail.com for more information.',
      user: '@michelle123',
    },
    {
      id: '2',
      imageSource: require('../assets/mobile-app(2).png'),
      description: 'Check out our latest features and updates in the mobile app! Stay connected and get the most out of your budgeting experience.',
      user: '@john456',
    },
    {
      id: '3',
      imageSource: require('../assets/mobile-app(3).png'),
      description: 'Introducing a new feature in our mobile app: goal tracking! Set your financial goals and monitor your progress easily.',
      user: '@emily789',
    },
    {
      id: '4',
      imageSource: require('../assets/mobile-app(4).png'),
      description: 'Join our community and start your journey to financial freedom with our mobile app. Take control of your finances today!',
      user: '@david321',
    },
    {
      id: '5',
      imageSource: require('../assets/mobile-app(5).png'),
      description: 'We are excited to announce the launch of our mobile app version 2.0. Experience enhanced performance and new features.',
      user: '@alex234',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <Image source={item.imageSource} style={styles.postImage} />
      <View style={styles.postActions}>
        <TouchableOpacity onPress={handleLike}>
          <Ionicons name={liked ? 'heart' : 'heart-outline'} size={24} color={liked ? 'red' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare}>
          <Ionicons name="share-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleComment(item)}>
          <Ionicons name="chatbubble-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.postDescription}>{item.description}</Text>
      <Text style={styles.postUser}>{item.user}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((item) => (
        <View key={item.id} style={styles.postContainer}>
          <Image source={item.imageSource} style={styles.postImage} />
          <View style={styles.postActions}>
            <TouchableOpacity onPress={handleLike}>
              <Ionicons
                name={liked ? 'heart' : 'heart-outline'}
                size={24}
                color={liked ? 'red' : 'black'}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleShare}>
              <Ionicons name="share-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleComment}>
              <Ionicons name="chatbubble-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.postDescription}>{item.description}</Text>
          <Text style={styles.postUser}>{item.user}</Text>
        </View>
      ))}
      {/* Comment Modal */}
      <Modal visible={showCommentModal} animationType="slide">
        <Comments navigation={navigation} selectedPost={selectedPost} closeModal={closeModal} />
      </Modal>
    </ScrollView>
  );
  
}
        
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  pimageContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  postDescription: {
    fontSize: 16,
    marginVertical: 10,
  },
  postUser: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
  },
});

