import React, { useState } from 'react';
import { Overlay, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SummaryIcon from 'react-native-vector-icons/Ionicons'
import TextIcon from 'react-native-vector-icons/Entypo'
import { View, TouchableOpacity } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from 'formik';
import moment from 'moment'

import { validations } from './schema'
import CustomButton from '../Button'
import styles from './style'
import { useTask } from '../../context/Task'

//  Overlay Modal 
export default function DialogBox({ open, toggleDialog, title, taskLoading }) {
  const { handleCreateTask } = useTask();

  const renderForm = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
    const onSubmit = (values) => {
      const obj = {
        title: values.summary,
        description: values.description,
        status: 'inprogress',
        due_at: moment(date).format('YYYY-MM-DD HH:mm:ss')
      }
      handleCreateTask(obj, toggleDialog)
    }
    const renderDate = () => {
      return (
        <View style={styles.dateField}>
          <Icon
            name="clock-time-nine-outline"
            size={20}
          />
          <Text style={styles.PlaceHoldertime}>{new Date(date).toLocaleDateString()}</Text>
        </View>
      )
    };
    return (
      <View style={{ flex: 1 }}>
        <Formik
          initialValues={{ summary: '', description: '', dueDate: '' }}
          onSubmit={onSubmit}
          validationSchema={validations}
        >
          {({
            handleSubmit,
            handleBlur,
            values,
            errors,
            touched,
            handleChange,
            dirty,
            isValid
          }) => (
            <>
              <View style={styles.headingContainer}>
                <TouchableOpacity onPress={toggleDialog}>
                  <Text style={styles.backText}>Back</Text>

                </TouchableOpacity>
                <Text h4 style={styles.heading}>New Task</Text>
              </View>
              <Input
                leftIcon={
                  <SummaryIcon
                    name='chatbubble-ellipses-outline'
                    size={24}
                    color='black'
                  />
                }
                placeholder="Summary"
                name='summary'
                onChangeText={handleChange('summary')}
                onBlur={handleBlur('summary')}
                value={values.summary}
                errorStyle={{ color: 'red' }}
                errorMessage={!!(errors.summary && touched.summary) ? errors.summary : ''}

              />

              <Input
                leftIcon={
                  <TextIcon
                    name='text'
                    size={24}
                    color='black'
                  />
                }
                placeholder="Description"
                name='description'
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
                errorStyle={{ color: 'red' }}
                errorMessage={!!(errors.description && touched.description) ? errors.description : ''}
                multiline={true}
              />
              <TouchableOpacity
                style={styles.DatePickerContainer}
                onPress={() => setShow(!show)}
                activeOpacity={1.5}
              >
                {show && <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />}
                {renderDate()}
              </TouchableOpacity>

              <CustomButton
                title="Save"
                onPress={handleSubmit}
                loading={taskLoading}
                disabled={!isValid || !dirty}
              />
            </>
          )}
        </Formik>
      </View>

    )
  }

  return (
    <Overlay
      isVisible={open}
      overlayStyle={styles.overlayStyle}
      children={renderForm()}
    />
  );
}


