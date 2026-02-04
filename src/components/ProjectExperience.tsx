import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Calendar, TrendingUp, Award } from "lucide-react";

/**
 * 项目经验组件
 * 展示个人参与的重要项目和技术实现
 */
import { Project } from "@/types/project";
import projectData from "@/data/projects.json";

export default function ProjectExperience() {
  const projects: Project[] = projectData as Project[];

  return (
    <section
      aria-label="项目经验"
      className="animate-fade-in-up"
    >
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Code
              className="h-5 w-5 text-accent-warm"
              aria-label="项目经验图标"
            />
            项目经验
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-lg border border-border hover:border-accent-warm/50 transition-all duration-300 hover:shadow-md"
              >
                {/* 项目标题 */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-warm transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" aria-label="时间图标" />
                    <span>{project.period}</span>
                  </div>
                </div>

                {/* 项目描述 */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* 项目成果 */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-1.5">
                    <Award
                      className="h-4 w-4 text-accent-warm"
                      aria-label="成果图标"
                    />
                    核心成果
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-secondary text-foreground px-2.5 py-1 rounded-lg"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 项目影响 */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp
                      className="h-4 w-4 text-success"
                      aria-label="影响图标"
                    />
                    <span className="text-success font-medium">
                      {project.impact}
                    </span>
                  </div>
                </div>

                {/* 技术栈 */}
                <div>
                  <h4 className="text-sm font-medium mb-2">技术栈</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
