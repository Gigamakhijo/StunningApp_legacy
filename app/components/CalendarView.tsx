import React, { useState } from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
// import { colors, typography } from "app/theme"
// import { Text } from "app/components/Text"
import { Calendar } from "react-native-calendars"

export interface CalendarViewProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const CalendarView = observer(function CalendarView(props: CalendarViewProps) {
  const { style } = props
  const $styles = [$calendar, style, $headerStyle2]
  const [selected, setSelected] = useState("")

  return (
    <View style={$styles}>
      <Calendar
        headerStyle={$headerStyle2}
        onDayPress={(day) => {
          setSelected(day.dateString)
        }}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true },
        }}
        monthFormat={"MMMM"} // 달력에서 보이는 월이 바뀔때 실행되는 함수
        theme={{
          backgroundColor: "FFFEFE",
          textDayFontWeight: "500", // 일 글자굵기
          textMonthFontWeight: "700", // 월 글자굵기
          textDayHeaderFontWeight: "500", // 요일 글자굵기
          calendarBackground: "#ffffff", // 캘린더 배경색상
          textSectionTitleColor: "#b6c1cd", // 요일 글자색상
          textDayFontSize: 15, // day 글자크기
          textMonthFontSize: 20, // month 글자크기
          textDayHeaderFontSize: 15, // 요일 글자크기
          selectedDayBackgroundColor: "#deabb2", // 일 선택시 나오는 동그라미 색상
          selectedDayTextColor: "#ffffff", // 일 선택시 나오는 동그라미안 글자 색상
          todayTextColor: "#deabb2", // 오늘 날짜 색상
          dayTextColor: "#2d4150", // 일 날짜 색상
          textDisabledColor: "#b6c1cd", // 다른달 일 나오는 부분 색깔
          arrowColor: "#ffffff", // 화살표색깔(지금은 흰색이라서 안보임)
          // dotColor: '#009688'
        }}
      />
    </View>
  )
})

const $calendar: ViewStyle = {
  borderRadius: 30,
  borderWidth: 5,
  borderColor: "white",
  height: 350,
}
// octber이랑 sun, mon등 요일 정렬되는 style
const $headerStyle2: ViewStyle = {
  // alignItems: 'center',
}
// const $text: TextStyle = {
//   fontFamily: typography.primary.normal,
//   fontSize: 14,
//   color: colors.palette.primary500,
// }
