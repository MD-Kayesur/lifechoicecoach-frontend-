# IKON SKILLS™ - Life Choice Coach Frontend

Welcome to the **IKON SKILLS™** frontend platform, a premium EdTech solution designed for Micro-Credentialing and Degree Progress management. This application provides a high-fidelity interface for practitioners to earn, track, and verify their professional credentials quality-assured by European International University (EIU), Paris.

## 🚀 Key Features

### 1. Verified Digital Certificates
- **Dynamic Fetching**: Integration with the `progress/certificates/` API to retrieve and display verified practitioner credentials.
*   **High-Fidelity Rendering**: Custom-designed certificate cards with gold accents, formal signatures, and practitioner photos.
- **Verification Portal**: Built-in verification logic ensuring credential validity and EQF-standard compliance.
- **Export to PDF**: One-click download functionality using `html2canvas` and `jsPDF`.

### 2. IKON SKILLS™ Micro-Credential Passport (MCPassport)
- **Compact Tracking**: A centralized dashboard view to monitor earned credits (ECTS) and EQF levels.
- **Real-time Progress**: Live progress bars tracking completion percentages for multiple Micro-Credentials.
- **Dynamic Navigation**: Seamless redirection between the passport and detailed certificate views.

### 3. Degree Progress Management
- **Pathway Visualization**: Visual representation of progress toward full degrees (e.g., Bachelor of Artificial Intelligence).
- **Competency Mapping**: Integration with `degreeProgressApi` to map earned Micro-Credentials to degree requirements.

### 4. Interactive Learning Catalog
- **Sample Micro-Credentials**: Preview "Sample Proof of Skill" for various pathways like AI Prompt Engineering and Workflow Automation.
- **Dynamic Redirection**: Contextual navigation that passes credential IDs to render specific sample data.

## 🛠 Technology Stack

- **Core**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS & Modern Serif Typography
- **State Management**: Redux Toolkit & RTK Query for efficient API communication
- **Animations**: Framer Motion for premium micro-interactions
- **Utilities**: 
  - `html2canvas` for DOM-to-Image conversion
  - `jspdf` for high-quality PDF generation
  - `lucide-react` for consistent iconography

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+)
- npm / yarn / pnpm

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables
Create a `.env` file in the root directory and configure the API endpoint:
```env
NEXT_PUBLIC_API_URL=https://your-api-url.com/api/v1
```

### Development Server
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```text
├── src
│   ├── app                # Next.js App Router (pages & layouts)
│   ├── assets             # Local image assets and icons
│   ├── common             # Shared wrapper components
│   ├── components         # UI Components grouped by feature
│   │   ├── auth           # Login, Signup, Reset Password
│   │   ├── dashboard      # MCPassport, DegreeProgress, etc.
│   │   ├── landingPages   # Certificate, CredentialDetail
│   │   └── ui             # Reusable base components
│   ├── lib                # Core data (MCS, DOMAINS) and constants
│   ├── providers          # Context providers
│   ├── redux              # State management & API features
│   │   ├── features       # RTK Query API slices
│   │   ├── hooks          # baseApi and custom hooks
│   │   └── types          # TypeScript interfaces
│   └── store              # Redux store configuration
└── public                 # Static assets (logos, svg icons)
```

## 📁 Key File Highlights

- `src/components/landingPages/`: Contains high-fidelity pages like `Certificate.tsx` and `CredentialDetail.tsx`.
- `src/components/dashboard/`: Core dashboard components including `MCPassport.tsx` and `DegreeProgress.tsx`.
- `src/redux/features/`: RTK Query API definitions (auth, progress, certificates).
- `src/lib/data.ts`: Master data for Micro-Credentials (MCS) and Categories (DOMAINS).

---

© 2026 IKON SKILLS™. Quality Assured by European International University, Paris.
# lifechoicecoach-frontend
