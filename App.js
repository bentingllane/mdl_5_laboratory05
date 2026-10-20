
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
} from "react-native";

const students = [
  { id: "s1", name: "Ana Cruz", course: "IT313", units: 21, isFullLoad: true },
  { id: "s2", name: "Bea Santos", course: "IT313", units: 15, isFullLoad: false },
  { id: "s3", name: "Cid Ramos", course: "IT313", units: 18, isFullLoad: true },
  { id: "s4", name: "Dex Alonzo", course: "IT313", units: 12, isFullLoad: false },
];

function StudentCard({ name, course, units, isFullLoad }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>Course: {course}</Text>
      <Text>Units Enrolled: {units}</Text>
      {isFullLoad && <Text style={styles.fullLoad}>Full Load</Text>}
    </View>
  );
}

export default function StudentRoster() {
  const [isReversed, setIsReversed] = useState(false);

  const displayedStudents = isReversed
    ? [...students].reverse()
    : students;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {`Total students: ${students.length}`}
      </Text>

      <Button
        title="Reverse Roster"
        onPress={() => setIsReversed((previous) => !previous)}
      />

      <ScrollView>
        {displayedStudents.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            units={student.units}
            isFullLoad={student.isFullLoad}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#f4f6f9",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#24235b",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dddddd",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  fullLoad: {
    color: "green",
    fontWeight: "bold",
    marginTop: 5,
  },
});
