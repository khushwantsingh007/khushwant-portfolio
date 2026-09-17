import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, ListFlowable, ListItem

def build_pdf(filename="public/resume.pdf"):
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    
    # 0.5 inch margins
    margin = 36
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=margin,
        rightMargin=margin,
        topMargin=30,
        bottomMargin=30
    )

    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        alignment=1, # Center
        textColor=colors.black
    )
    
    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        alignment=1, # Center
        textColor=colors.HexColor('#222222')
    )
    
    links_style = ParagraphStyle(
        'LinksStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        alignment=1, # Center
        textColor=colors.HexColor('#0044cc')
    )

    heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11.5,
        leading=15,
        textColor=colors.black,
        spaceBefore=8,
        spaceAfter=3
    )

    body_style = ParagraphStyle(
        'BodyDark',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=colors.HexColor('#1a1a1a')
    )

    body_bold = ParagraphStyle(
        'BodyBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12.5,
        textColor=colors.black
    )

    bullet_style = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.HexColor('#222222'),
        leftIndent=14
    )

    story = []

    # 1. Header
    story.append(Paragraph("Khushwant Singh", title_style))
    story.append(Spacer(1, 3))
    story.append(Paragraph("Contact Number: 9758774335 | Email : khushwantsingh8587@gmail.com", contact_style))
    story.append(Spacer(1, 2))
    
    links_html = (
        '<a href="https://khushwantsingh007.github.io/"><u>Portfolio</u></a> | '
        '<a href="https://github.com/khushwantsingh007"><u>Github</u></a> | '
        '<a href="https://www.linkedin.com/in/khushwat-singh-2511542b6"><u>Linkedin</u></a> | '
        '<a href="https://leetcode.com/u/khushwant007/"><u>Leetcode</u></a> | '
        '<a href="https://www.codechef.com/users/khushwant8587"><u>Codechef</u></a>'
    )
    story.append(Paragraph(links_html, links_style))
    story.append(Spacer(1, 8))

    # 2. Professional Summary
    story.append(Paragraph("Professional Summary", heading_style))
    summary_text = (
        "Aspiring Cloud Engineer and Backend Developer with experience in building robust web applications. "
        "Proficient in modern web technologies like JavaScript, Node.js, and MySQL, with a strong focus on security, "
        "performance, and user experience."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 4))

    # 3. Technical Skills
    story.append(Paragraph("Technical Skills", heading_style))
    skills_lines = [
        "<b>• Languages:</b> C++, C, JavaScript",
        "<b>• Web:</b> Html, CSS, Node.js, Express.js, Rest API",
        "<b>• Databases:</b> SQL, MongoDB, Postgres",
        "<b>• Tools:</b> Vs-Code, Git, Windows, Postman, Linux",
        "<b>• Core Concepts:</b> Data Structures & Algorithms, OS, DBMS, CN, OOP, Compiler Design",
        "<b>• Devops Tools:</b> Docker, Kubernetes, Github Actions"
    ]
    for line in skills_lines:
        story.append(Paragraph(line, body_style))
    story.append(Spacer(1, 4))

    # 4. Academic Details
    story.append(Paragraph("Academic Details", heading_style))
    table_data = [
        [
            Paragraph("<b>Education</b>", body_bold),
            Paragraph("<b>Institute</b>", body_bold),
            Paragraph("<b>GPA/Marks(%)</b>", body_bold),
            Paragraph("<b>Year</b>", body_bold)
        ],
        [
            Paragraph("B.TECH in Computer Science", body_style),
            Paragraph("Graphic Era Hill University Bhimtal", body_style),
            Paragraph("7.28/10", body_style),
            Paragraph("2023 - 2027", body_style)
        ],
        [
            Paragraph("12<sup>th</sup> U.B.S.E", body_style),
            Paragraph("Govt. M. Inter College, Chaukhutiya", body_style),
            Paragraph("68%", body_style),
            Paragraph("2022 – 2023", body_style)
        ],
        [
            Paragraph("10<sup>th</sup> U.B.S.E", body_style),
            Paragraph("Bal Vikas Vidya Mandir HSS, Bhatkote", body_style),
            Paragraph("70.4%", body_style),
            Paragraph("2020 - 2021", body_style)
        ]
    ]
    
    t = Table(table_data, colWidths=[140, 220, 95, 85])
    t.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.75, colors.HexColor('#444444')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#888888')),
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f5f5f5')),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(t)
    story.append(Spacer(1, 5))

    # 5. Experience
    story.append(Paragraph("Experience", heading_style))
    story.append(Paragraph("<b>Backenddeveloper | Intern | Whizzact (June 2026 – Aug 2026)</b>", body_style))
    story.append(Paragraph(
        "• Developed and maintained RESTful APIs using Node.js and Express.js for core backend functionalities, "
        "enabling smooth integration between frontend and database layers.",
        bullet_style
    ))
    story.append(Paragraph(
        "• Worked with Postgres for database design and management, including schema modeling, CRUD operations, "
        "and performance optimization for scalable backend services.",
        bullet_style
    ))
    story.append(Spacer(1, 4))

    # 6. Projects
    story.append(Paragraph("Projects", heading_style))
    
    # Project 1: Smart CCTV
    story.append(Paragraph("<b>Smart CCTV Analytics Platform (Aug 2024 – June 2025)</b>", body_style))
    story.append(Paragraph(
        "• Developed an AI-powered CCTV surveillance platform with real-time people/vehicle detection, "
        "intrusion detection, line-crossing, and crowd analysis using YOLOv8 and OpenCV.",
        bullet_style
    ))
    story.append(Paragraph(
        "• Built a React-based monitoring dashboard with live analytics and event logs, supported by "
        "FastAPI REST APIs, WebSocket alerts, authentication, and role-based access control.",
        bullet_style
    ))
    story.append(Paragraph(
        "• <i>React.js, TypeScript, FastAPI, Python, OpenCV, YOLOv8, MongoDB, WebSockets</i>",
        bullet_style
    ))
    story.append(Spacer(1, 3))

    # Project 2: Stock Analysis
    story.append(Paragraph("<b>Stock Analysis – AI Dashboard (Dec 2024 – Jan 2025)</b>", body_style))
    story.append(Paragraph(
        "• Developed real-time stock dashboard with live market data. Implemented RSI, MACD, Bollinger Bands for analysis. "
        "Integrated ML models for short-term price prediction.",
        bullet_style
    ))
    story.append(Paragraph(
        "• Created interactive candlestick charts with auto-refresh.",
        bullet_style
    ))
    story.append(Spacer(1, 4))

    # 7. Certifications
    story.append(Paragraph("Certifications", heading_style))
    story.append(Paragraph("• Full Stack Mastery Course, Udemy (Feb 2026 - Apr 2026)", bullet_style))
    story.append(Paragraph("• Oracle Cloud Infrastructure Certified AI Foundations Associate (Sept 2025 - Oct 2025)", bullet_style))
    story.append(Paragraph("• The AI Engineer Udemy Course 2026: Complete AI Engineer Bootcamp (Jul 2026 - Aug 2026)", bullet_style))
    story.append(Spacer(1, 4))

    # 8. Achievements
    story.append(Paragraph("Achievements", heading_style))
    story.append(Paragraph("• 3 Star in SQL on hackerRank.", bullet_style))
    story.append(Paragraph("• Solved 350+ problems on Leetcode.", bullet_style))

    doc.build(story)
    print(f"Successfully generated {filename}")

if __name__ == "__main__":
    build_pdf()
