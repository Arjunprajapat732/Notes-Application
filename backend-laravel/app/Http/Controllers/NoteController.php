<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Note;

class NoteController extends Controller
{
    public function index(Request $request)
    {
        $notes = Note::all();
        return response()->json($notes);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);
        if ($request->has('id')) {
            $note = Note::find($request->id);
            if ($note) {
                $note->update($validatedData);
                return response()->json(['message' => 'Note updated successfully', 'note' => $note]);
            } else {
                return response()->json(['message' => 'Note not found'], 404);
            }
        } else {
            $note = Note::create($validatedData);
            return response()->json(['message' => 'Note created successfully', 'note' => $note]);
        }
    }

    public function detail(Request $request){
        $validatedData = $request->validate([
            'id' => 'required|integer|exists:notes,id',
        ]);

        $note = Note::find($request->id);
        return response()->json($note);
    }

    public function delete(Request $request)
    {
        $validatedData = $request->validate([
            'id' => 'required|integer|exists:notes,id',
        ]);

        $note = Note::find($request->id);
        $note->delete();

        return response()->json(['message' => 'Note deleted successfully']);
    }
}
