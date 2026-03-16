import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:my_cv/models/project_model.dart';
import 'package:url_launcher/url_launcher.dart';
class ProjectCardDetais extends StatelessWidget {
  final ProjectModel project;
  const ProjectCardDetais({super.key, required this.project});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 24),

        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                project.title,
                style: const TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 12),
              Text(
                project.description,
                style: TextStyle(
                  fontSize: 16,
                  color: Colors.grey[800],
                  height: 1.5,
                ),
              ),
              const SizedBox(height: 16),

              Wrap(
                spacing: 10,
                runSpacing: 10,
                children: (project.technologies )
                    .map((tech) => Chip(
                  label: Text(tech),
                  backgroundColor: Colors.blue[50],
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                ))
                    .toList(),
              ),

              const SizedBox(height: 20),

              Wrap(
                spacing: 16,
                runSpacing: 12,
                children: [
                  if (project.github.isNotEmpty)
                    _projectLinkButton(
                      icon: FontAwesomeIcons.github,
                      label: 'GitHub',
                      url: project.github,
                      color: Colors.black87,
                    ),
                  if (project.youtubeUrl.isNotEmpty)
                    _projectLinkButton(
                      icon: FontAwesomeIcons.link,
                      label: 'Live Demo',
                      url: project.youtubeUrl,
                      color: Colors.blue[700]!,
                    ),
                  /*   if (project['playStore'] != null)
                                      _projectLinkButton(
                                        icon: FontAwesomeIcons.googlePlay,
                                        label: 'Google Play',
                                        url: project['playStore'],
                                        color: Colors.green[700]!,
                                      ),*/
                ],
              ),
            ],
          ),
        ),
    );  }
}

Widget _projectLinkButton({
  required IconData icon,
  required String label,
  required String url,
  required Color color,
}) {
  return OutlinedButton.icon(
    icon: FaIcon(icon, size: 18),
    label: Text(label),
    onPressed: () => launchUrl(Uri.parse(url)),
    style: OutlinedButton.styleFrom(
      foregroundColor: color,
      side: BorderSide(color: color),
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
    ),
  );
}