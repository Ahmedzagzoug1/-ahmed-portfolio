class ProjectModel {
  final String title;
  final String description;
  final List<String> technologies;
  final String github;
final String backendGithub;
final String youtubeUrl;
  ProjectModel( {
    required this.title,
    required this.description,
    required this.technologies,
    required this.github,
     this.backendGithub='',
    required this.youtubeUrl
  });

  static List<ProjectModel> projects = [
    ProjectModel(
      title: 'Car Rental App',
      description: 'A production-ready application following Clean architecture, featuring booking workflows, OTP verification, driver license validation using OCR , and offline caching.',
      technologies: ['Flutter', 'Dart', 'Cubit', 'Firebase',
       'Clean architecture', 'Dependency Injection', 'Hive' , 'http'],
      github: 'https://github.com/Ahmedzagzoug1/car_rental',
      youtubeUrl: 'https://youtube.com/shorts/V5OSkzx9zUk', // ضيف الرابط هنا
    ),
    ProjectModel(
      title: 'Monkey meal (Food Delivery App)',
      description: 'A group project where I led the complete UI implementation, responsive layouts, and structured the codebase to connect UI with backend services.',
      technologies: ['Flutter', 'Dart', 'BLoC', 'Firebase', 'Material Design'],
      github: 'https://github.com/Ahmedzagzoug1/monkey-meal',
youtubeUrl:'https://youtube.com/shorts/rc72dybDzco'     ),
    ProjectModel(
      title: 'Student Guide App',
      description: 'A student support application providing access to digital books and resources with Firebase Authentication and API communication.',
      technologies: ['Flutter', 'Provider', 'Firebase Auth', 'Dio', 'REST API'],
      github: 'https://github.com/Ahmedzagzoug1/student-guide',
      youtubeUrl:''
    ),
    ProjectModel(
      title: 'Vpn App',
      description: 'A secure and simple Free VPN mobile application built using the Flutter framework. This app allows users to browse the internet safely by connecting to free VPN servers.',
      technologies: ['Flutter', 'Getx', 'Http', 'Hive'],
      github: 'https://github.com/Ahmedzagzoug1/free_vpn',
      youtubeUrl:'https://youtube.com/shorts/JKt1UxL16Ug'
    ),
    ProjectModel(
        title: 'Quran Karim App',
        description: 'A native Android application built using Java that allows users to read and explore the Holy Quran with additional Islamic features such as Tafsir and Quran alarm reminders.',
        technologies: ['Java', 'XML', 'BroadcastReceiver', 'AlarmManager'],
        github: 'https://github.com/Ahmedzagzoug1/QuranKariem',
        youtubeUrl:'https://youtube.com/shorts/D8bAH8SybNU'
    ),
  ProjectModel(
  title: 'Medical Health App (under development)',
  description: 'Built a full-stack healthcare platform consisting of a Flutter mobile application and a scalable Node.js backend API. The platform enables patients to discover doctors, book appointments, manage schedules, and securely authenticate using JWT. The backend follows a modular architecture with role-based access control and comprehensive API documentation.',
  technologies: ['Node.js', 'Express.js', 'MongoDB', 'Flutter', 'Dart', 'BLoC / Cubit', 'Dio', 'MVVM', 'JWT Authentication'],
  github: 'https://github.com/Ahmedzagzoug1/medical-health', // قم بتحديث الرابط برابط المستودع الفعلي
  youtubeUrl: '', // ضع رابط الفيديو الحقيقي هنا لو متوفر
  backendGithub: 'https://github.com/Ahmedzagzoug1/medical-health-backend'
),
  ];
}