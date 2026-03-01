import mongoose, { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema({
  title: { 
    type: String, 
    required: [true, 'Please provide a project title'],
    trim: true 
  },
  description: { 
    type: String, 
    required: [true, 'Please provide a description'] 
  },
  techStack: { 
    type: [String], // Array of strings (e.g., ["React", "Node"])
    default: [] 
  },
  liveLink: { type: String, default: '#' },
  repoLink: { type: String, default: '#' },
  category: { 
    type: String, 
    enum: ['Web App', 'Mobile', 'UI/UX', 'System'], // Restricts input to these choices
    default: 'System' 
  },
  imageUrl: { type: String, default: '' }
}, { 
  timestamps: true // Automatically creates 'createdAt' and 'updatedAt' fields
});

// Important: Next.js uses hot-reloading, so we check if the model exists before creating it
export default models.Project || model('Project', ProjectSchema);