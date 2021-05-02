import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';

// maptypes transform your ts types 
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}