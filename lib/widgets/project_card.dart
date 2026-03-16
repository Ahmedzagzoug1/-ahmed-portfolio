import 'package:flutter/material.dart';
import 'package:my_cv/widgets/project_card_details.dart';

import '../models/project_model.dart';
class ProjectCard extends StatefulWidget {
  final ProjectModel project;
  const ProjectCard({super.key, required this.project});

  @override
  State<ProjectCard> createState() => _ProjectCardState();
}

class _ProjectCardState extends State<ProjectCard> {
  bool isHovered = false; // متقير لحالة الماوس

  @override
  Widget build(BuildContext context) {
    // نحسب الـ Transformation بناءً على الـ Hover
    final hoveredTransform = Matrix4.identity()
      ..translate(0, -8, 0) // بيرفع الكارت لفوق 8 بكسل
      ..scale(1.02); // بيكبره بنسبة 2%

    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 16.0),
      child: MouseRegion(
        onEnter: (_) => setState(() => isHovered = true), // الماوس دخل
        onExit: (_) => setState(() => isHovered = false), // الماوس خرج
      child:  AnimatedContainer(
      duration: const Duration(milliseconds: 300), // زودنا الوقت شوية عشان الانيميشن يبان أنعم
      curve: Curves.easeInOutCubic, // نوع حركة احترافي أكتر في الـ Web
      padding: const EdgeInsets.all(20),
      transform: isHovered ? hoveredTransform : Matrix4.identity(),
      decoration: BoxDecoration(
        // التغيير بين الـ Blue الفاتح والأبيض الصريح
        color: isHovered ? Colors.white : Colors.blue[50],

        borderRadius: BorderRadius.circular(15),

        // تظبيط الظل (Shadow) عشان يحسس المستخدم إن الكارت فعلاً طار لفوق
        boxShadow: [
          BoxShadow(
            color: isHovered
                ? Colors.black.withOpacity(0.15) // ظل أتقل شوية وقت الـ Hover
                : Colors.black.withOpacity(0.05), // ظل خفيف جداً في الحالة العادية
            blurRadius: isHovered ? 20 : 8,
            offset: isHovered ? const Offset(0, 10) : const Offset(0, 4),
          ),
        ],

        // إضافة Border خفيف جداً بيظهر بس وقت الـ Hover عشان يحدد أطراف الكارت الأبيض
        border: Border.all(
          color: isHovered ? Colors.blue.withOpacity(0.2) : Colors.transparent,
          width: 1.5,
        ),
      ),
      child: ProjectCardDetais(project: widget.project),
    ),
      ),
    );
  }
}