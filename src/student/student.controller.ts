import { Controller, Get, Post, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './entities/student.entity';

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    // Endpoint to create a student
    @Post()
    create(@Body() studentData: Partial<Student>): Promise<Student> {
        return this.studentService.create(studentData);
    }

    // Endpoint to fetch all students
    @Get()
    findAll(): Promise<Student[]> {
        return this.studentService.findAll();
    }
}
