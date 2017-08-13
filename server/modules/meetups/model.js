const MeetupSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: [5, '5 characters long at least'],
    },
    description: {
        type: String,
        required: true,
        minLength: [10, '10 characters long at least'],
    }, group: {
        type: Schema.Types.ObjectId,
        ref: 'Group',
    },
    eventDate: {
        type: Date,
    }
}, { timestamps: true });

export default mongoose.model('Meetup', MeetupSchema);
