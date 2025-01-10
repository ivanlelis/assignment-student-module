import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>,
    ) { }

    // Create a student
    async create(studentData: Partial<Student>): Promise<Student> {
        const student = this.studentRepository.create(studentData);
        return this.studentRepository.save(student);
    }

    // Fetch all students
    async findAll(): Promise<Student[]> {
        return this.studentRepository.find();
    }

    async update(id: number, updateData: Partial<Student>): Promise<Student> {
        await this.studentRepository.update(id, updateData);
        return this.studentRepository.findOneBy({ id });
    }

}
