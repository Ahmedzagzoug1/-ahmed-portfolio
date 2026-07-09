import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:my_cv/models/project_model.dart';
import 'package:my_cv/widgets/project_card.dart';
import 'package:url_launcher/url_launcher.dart';

void main() {
  runApp(const MyCVApp());
}

class MyCVApp extends StatelessWidget {
  const MyCVApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Ahmed Elsaghier - Portfolio',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        scaffoldBackgroundColor: Colors.grey[100],
        fontFamily: 'Segoe UI', // أو أضف font عربي مناسب في pubspec لو عايز
      ),
      home:  Directionality(
        textDirection: TextDirection.ltr, // ← هنا الـ RTL الرئيسي
        child: HomePage(),
      ),
    );
  }
}

class HomePage extends StatefulWidget {
   HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final String name = "Ahmed Mohammed Elsaghier";

  final String title = "Flutter Developer ";

   final String bio =
       "Junior Flutter & Android Developer passionate about building clean and user-friendly mobile applications. "
       "I have hands-on experience with APIs, Firebase, and Git, and I enjoy learning new technologies, improving my skills, "
       "and contributing to real-world projects while following best coding practices.";

   final List<String> skills = [
     "Flutter & Dart",
     "Node JS",
     "Firebase",
     "REST APIs",
     "MongoDB",

     "Git & GitHub",
     "Responsive Design",
     "Provider",
     "Cubit",
     "JWT Authentication",
     "Clean Architecture",
     "Java (Android)"
   ];

   final List<ProjectModel> projects =ProjectModel.projects ;

late  ScrollController _controller;
@override
  void initState() {
_controller=ScrollController();
    super.initState();
  }
  @override
  void dispose() {
  _controller.dispose();
    // TODO: implement dispose
    super.dispose();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
//for up , down and space keys in computer keyboard
      body: KeyboardListener(
        focusNode: FocusNode()..requestFocus(),
        onKeyEvent: (event) {
          if (event is KeyDownEvent ) {
            if (event.logicalKey == LogicalKeyboardKey.arrowDown ||
            event.logicalKey == LogicalKeyboardKey.space) {
              // كود ينزل السكرول مسافة معينة
              _controller.animateTo(
                  _controller.offset + 300,
                  duration: Duration(milliseconds: 300),
                  curve: Curves.easeOut
              );
            }
          }else if(event is KeyUpEvent){
            if (event.logicalKey == LogicalKeyboardKey.arrowUp ) {
              // كود ينزل السكرول مسافة معينة
              _controller.animateTo(
                  _controller.offset - 300,
                  duration: Duration(milliseconds: 300),
                  curve: Curves.easeOut
              );
            }
          }
        },
        child: SingleChildScrollView(
          controller: _controller,
          child: Column(
            children: [
              // Header Section
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(40.0),
                color: Colors.blue[800],
                child: Column(
                  children: [
                    const CircleAvatar(
                      radius: 70,
                      backgroundImage: NetworkImage(
                        'https://i.ibb.co/TMb2qBmq/my-image.jpg', //image profile
                      ),
                    ),
                    const SizedBox(height: 20),
                    Text(
                      name,
                      style: const TextStyle(
                        fontSize: 42,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      title,
                      style: const TextStyle(
                        fontSize: 24,
                        color: Colors.white70,
                      ),
                    ),
                  ],
                ),
              ),

              // About & Bio
              Padding(
                padding: const EdgeInsets.all(32.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      "About Me",
                      style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
                    ),
                    const SizedBox(height: 16),
                    Text(
                      bio,
                      style: const TextStyle(fontSize: 18, height: 1.6),
                    ),
                    const SizedBox(height: 40),

                    // Skills
                    const Text(
                      "Skills",
                      style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                    ),
                    const SizedBox(height: 16),
                    Wrap(
                      spacing: 12,
                      runSpacing: 12,
                      children: skills
                          .map((skill) => Chip(
                        label: Text(skill),
                        backgroundColor: Colors.blue[100],
                        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                      ))
                          .toList(),
                    ),
                    const SizedBox(height: 60),

                    // Projects Section
                    const Text(
                      "Projects",
                      style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
                    ),
                    const SizedBox(height: 24),

                    ...projects.map((project) {
                      return ProjectCard(project: project);
                    }).toList(),

                    const SizedBox(height: 60),

                    // Social & Download
                    Center(
                      child: Column(
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              _socialButton(
                                icon: FontAwesomeIcons.linkedin,
                                url: 'https://www.linkedin.com/in/ahmed-elsaghier-1986351b3/',
                                color: Colors.blue[700]!,
                              ),
                              const SizedBox(width: 24),
                              _socialButton(
                                icon: FontAwesomeIcons.github,
                                url: 'https://github.com/Ahmedzagzoug1',
                                color: Colors.black87,
                              ),
                              const SizedBox(width: 24),
                              _socialButton(
                                icon: FontAwesomeIcons.whatsapp,
                                url: 'https://wa.me/201080317245',
                                color: Colors.green[700]!,
                              ),
                            ],
                          ),
                          const SizedBox(height: 30),
                          ElevatedButton.icon(
                            onPressed: () {
                              launchUrl(Uri.parse('https://drive.google.com/file/d/1mosVxXUY_LuAO9fdQPSbDrxX-IkJmc40/view?usp=drive_link.pdf')); // غير الرابط
                            },
                            icon: const Icon(Icons.download),
                            label: const Text("Download CV (PDF)"),
                            style: ElevatedButton.styleFrom(
                              padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 16),
                              textStyle: const TextStyle(fontSize: 18),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),

              // Footer
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(20),
                color: Colors.blue[900],
                child:  Center(
                  child: Text(
                    "© ${DateTime.now().year} Ahmed Elsaghier - Built with Flutter Web",
                    style: TextStyle(color: Colors.white70),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _socialButton({
    required IconData icon,
    required String url,
    required Color color,
  }) {
    return IconButton(
      icon: FaIcon(icon, size: 36),
      color: color,
      onPressed: () => launchUrl(Uri.parse(url)),
    );
  }

}