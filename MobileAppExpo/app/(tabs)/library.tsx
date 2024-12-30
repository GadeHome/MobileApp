import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Button, ButtonText } from '@/components/ui/button';

const books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    cover: 'https://ranobehub.org/api/media/14214/medium',
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    cover: 'https://ranobehub.org/api/media/5436/big',
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    cover: 'https://via.placeholder.com/150',
  },

  {
    id: 4,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    cover: 'https://via.placeholder.com/150',

  }
];

export default function Library() {
  return (
    <View className='flex-[1] bg-[#101010] mt-8'>
      {/* Search Bar */}
      <View className='py-4 px-4 bg-[#101010]'>
        <TextInput
          className='bg-[#202020] color-white border-0 rounded-lg shadow-sm p-4'
          placeholder="Search books..."
          placeholderTextColor="#c0c0c0"
        />
      </View>

      {/* Content */}
      <ScrollView className='flex-[1]'>
        <View className='px-4'>
          {/* Book List */}
          <View className='flex-row flex-wrap justify-between'>
            {books.map((book) => (
              <TouchableOpacity
                key={book.id}
                className='w-[48%] mb-3 bg-[#202020] rounded-lg shadow-sm p-1.5'
                onPress={() => {
                  // Navigate to Book Details Screen
                  // navigation.navigate('BookDetails', { bookId: book.id });
                  // or use a modal to display book details
                  alert(`Title: ${book.title}\nAuthor: ${book.author}`);
                  // navigation.navigate('BookDetails', { bookId: book.id });
                  
                }}
              >
                <Image
                  source={{ uri: book.cover }}
                  className='w-[100%] h-[200px] object-cover rounded-lg mb-1'
                />
                <Text className='text-[14px] text-white'>{book.title}</Text>
                <Text className='text-[10px] text-[#c0c0c0]'>{book.author}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}